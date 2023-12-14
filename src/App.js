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
        </MainContainer>
      </div>
    </main>
  );
}

export default App;
