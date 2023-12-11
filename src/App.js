import StepsContainer from "./components/StepsContainer";
import Steps from "./components/Steps";
import MainContainer from "./components/MainContainer";
import StepInputs from "./components/StepInputs";

function App() {
  return (
    <main>
      <div className="box-container">
        <StepsContainer>
          <Steps />
        </StepsContainer>
        <MainContainer>
          {/* main layouts of the steps */}
          <StepInputs />

          {/* Buttons to navigate through steps */}
          {/* <div className="buttons">
            <Button callback="go/back" type="btn-previous">
              Go back
            </Button>
            <Button callback="go/next" type="btn-next">
              Next
            </Button>
          </div> */}
        </MainContainer>
      </div>
    </main>
  );
}

export default App;
