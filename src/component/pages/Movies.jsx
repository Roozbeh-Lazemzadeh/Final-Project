import Footer from "../Footer/Footer";
import Header from "../header/Header";
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apikey, baseUrl, imgBaseURL, posterImg } from "../../apiConfig";
import Card from "../Card/Card";
import { Pagination } from "antd";
import "../../module/movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const { types, categories } = useParams();
  console.log(types, categories);

  //pagination
  const [current, setCurrent] = useState(1);

  async function getcard() {
    try {
      const { data } = await axios.get(
        `${baseUrl}/${types}/${categories}?api_key=${apikey}`
      );

      setMovies(data.results);
      console.log(data.results);
    } catch {
      console.log("ERRRROR");
    }
  }
  useEffect(() => {
    getcard();
  }, [categories]);

  //pagination code

  function onChange(number) {
    setCurrent(number);
    console.log(current);
  }

  return (
    <>
      <Header />
      <Row justify="center" gutter={16} id="moviesCard">
        {movies.map(
          (movie) =>
            movies.indexOf(movie) < 12 && (
              <Col xs={12} sm={8} md={6} lg={4} key={movie.id}>
                {/* <NavLink to={`/${movie.media_type}/${movie.id}`}> */}
                <Card
                  src={posterImg(movie.poster_path)}
                  title={movie.title}
                  name={movie.name}
                  vote_average={movie.vote_average}
                  media_type={movie.media_type}
                />
                {/* </NavLink> */}
              </Col>
            )
        )}
      </Row>
      <Pagination
        defaultCurrent={1}
        current={current}
        total={500}
        onChange={(number) => onChange(number)}
        id="pagination"
      />
      <Footer />
    </>
  );
}
