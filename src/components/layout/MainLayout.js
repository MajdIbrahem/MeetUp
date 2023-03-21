import MainNavigation from "./MainNavigation";

function MainLayout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="mx-auto my-3 w-11/12 max-w-2xl flex justify-center">
        {props.children}
      </main>
    </div>
  );
}
export default MainLayout;
