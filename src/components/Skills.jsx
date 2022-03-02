import Circle from 'react-circle'
import { requestStates } from '../constants';
import { useSkills } from '../customHooks/useSkills';

export const Skills = () => {

  const [ sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {
            fetchRequestState === requestStates.loading && (
              <p className="description">Loading...</p>
            )
          }
          {
            fetchRequestState === requestStates.error && (
              <p className="description">Error</p>
            )
          }
          {
            fetchRequestState === requestStates.success && (
              sortedLanguageList().map((item, index) => (
                <div className="skill-item" key={index}>
                  <p className="description">
                    <strong>{item.language}</strong>
                  </p>
                  <Circle
                    animate={true}
                    progress={converseCountToPercentage(item.count)}
                  />
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  );
}