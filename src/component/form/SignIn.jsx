import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./SignIn.css";
import toast from "react-hot-toast";
export default function SignIn() {
	//define consumer
	const value = useContext(UserContext);

	//function handel form
	function handelForm(e) {
		e.preventDefault();
		const { username, passWord } = e.target.elements;
		// console.log(passWord.value);
		if (!(username.value && passWord.value)) {
			toast.error("Please fill the blanks", {
				style: { backgroundColor: "#eec932", color: "#000" },
			});
		} else if (value.status !== 200) {
			console.log("loading...");
		} else {
			value.login(username.value, passWord.value);
		}
	}
	//

	return (
		<div className="wrapper">
			<div className="content">
				<div className="login_page_wrapper">
					<form className="login_page_form" onSubmit={handelForm}>
						<div className="login_page_form_head">
							<h1 className="login_page_form_head_title">LOGIN</h1>
							{/* <div className="login_page_form_head_link">
								  Sig
								<a
									href="https://hexdownload.co/auth/register"
									className="login_page_form_head_link_txt"
								>
									ثبت نام کنید
								</a>
							</div> */}
						</div>
						<div className="login_page_form_item">
							<label className="login_page_form_item_label" htmlFor="mobile">
								USERNAME:
							</label>
							<input
								className="login_page_form_item_input"
								type="tel"
								name="username"
								id="mobile"
								dir="ltr"
								autoComplete="off"
							/>
						</div>
						<div className="login_page_form_item">
							<label className="login_page_form_item_label" htmlFor="mobile">
								PASSWORD:
							</label>
							<input
								className="login_page_form_item_input"
								type="tel"
								name="passWord"
								id="mobile"
								dir="ltr"
								autoComplete="off"
							/>
						</div>
						<div className="login_page_form_actions">
							<button type="submit" className="login_page_form_actions_submit">
								<span className="login_page__form__actions__submit__txt">
									LOGIN
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="footer">
				<div className="footer__links">
					<a href="https://hexdownload.co" className="footer__links__item">
						خانه
					</a>
					<a
						href="https://hexdownload.co/contact/"
						className="footer__links__item"
					>
						تماس با ما
					</a>
					<a
						href="https://hexdownload.co/bug-report/"
						className="footer__links__item"
					>
						گزارش باگ
					</a>
				</div>
			</div>
		</div>
	);
}
