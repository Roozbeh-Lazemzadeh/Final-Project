export default function DashboardRightSide({ user }) {
  return (
    <div class="dashboard__widget dashboard__widget__information">
      <div class="dashboard__widget__head">
        <div class="dashboard__widget__head__title">Personal Info</div>
      </div>
      <div class="dashboard__widget__content">
        <div class="dashboard__widget__information__item">
          <span class="__head"> Name </span>
          <span class="__txt">{user && user.name}</span>
        </div>
        <div class="dashboard__widget__information__item">
          <span class="__head">Id</span>
          <span class="__txt">{user && user.id}</span>
        </div>
        <div class="dashboard__widget__information__item">
          <span class="__head">Username</span>
          <span class="__txt">{user && user.username}</span>
        </div>
      </div>
    </div>
  );
}
