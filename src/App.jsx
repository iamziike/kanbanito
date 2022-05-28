import './App.css';
import CustomThemeProvider from './themes/CustomThemeProvider';
import StoreProvider from './store/StoreProvider';
import PageDivider from './components/layout/PageDivider/PageDivider';

const App = () => {
  return (
    <CustomThemeProvider>
      <StoreProvider>
        <PageDivider />
      </StoreProvider>
    </CustomThemeProvider>
  );
};

export default App;
