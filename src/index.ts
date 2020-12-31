interface Experiment {
  id: number;
  name: string;
  backgroundImage: string;
  completed: boolean;
}

const experiments: Experiment[] = [
  {
    id: 501,
    name: 'How does a T-Rex defend their nest?',
    backgroundImage: 'assets/dino-experiment-501.trex-nest.jpg',
    completed: false
  }
];

function getExperiment(id: number): Experiment | undefined {
  let retVal;
  for (const experiment of experiments) {
    if (experiment.id === id) {
      retVal = experiment;
      break;
    }
  }
  return retVal;
}

function renderExperiment(experiment: Experiment): DocumentFragment {
  const retVal = document.createDocumentFragment();
  const background = document.createElement('img');
  background.src = experiment.backgroundImage;
  retVal.appendChild(background);

  const id = document.createElement('h2');
  id.innerHTML = `Dino Experiment ${experiment.id}`;
  retVal.appendChild(id);

  const title = document.createElement('h1');
  title.innerHTML = experiment.name;
  retVal.appendChild(title);

  return retVal;
}

window.onload = function (): void {
  document.body.appendChild(renderExperiment(getExperiment(501) as Experiment));
};
