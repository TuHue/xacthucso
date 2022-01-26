import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


//Layout
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const DangNhap = lazy(() => import("./views/pages/DangNhap/DangNhap"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route
            exact
            path="/dang-nhap"
            name="Đăng Nhập"
            render={(props) => <DangNhap {...props} />}
          />
          <Route
            path="/"
            name="Quản trị"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
