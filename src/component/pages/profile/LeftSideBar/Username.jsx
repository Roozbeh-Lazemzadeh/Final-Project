export default function Username({ user }) {
  return (
    <div className="sidebar__name">{user && (user.name || user.username)} </div>
  );
}
