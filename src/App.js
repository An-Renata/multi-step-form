import StepsContainer from "./components/StepsContainer";
import Steps from "./components/Steps";
import MainContainer from "./components/MainContainer";
import StepInputs from "./components/StepInputs";
import { FormProvider } from "./contexts/FormContext";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <div className="box-container">
        <FormProvider>
          <StepsContainer>
            <Steps />
          </StepsContainer>
          <MainContainer>
            <StepInputs />
            <div className="buttons">
              <Button callback="go/back" type="btn-previous">
                Go back
              </Button>
              <Button callback="go/next" type="btn-next">
                Next
              </Button>
            </div>
          </MainContainer>
        </FormProvider>
      </div>
    </main>
  );
}

export default App;
