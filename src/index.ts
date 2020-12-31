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
  var retVal;
  for (var i = 0; i < experiments.length; i++) {
    if (experiments[i].id === id) {
      retVal = experiments[i];
      break;
    }
  }
  return retVal;
}

function renderExperiment(experiment: Experiment): DocumentFragment {
  var retVal = document.createDocumentFragment();
  var background = document.createElement('img') as HTMLImageElement;
  background.src = experiment.backgroundImage;
  background.width = 1280;
  background.height = 720;
  retVal.appendChild(background);

  var id = document.createElement('h2');
  id.innerHTML = `Dino Experiment ${experiment.id}`;
  retVal.appendChild(id);

  var title = document.createElement('h1');
  title.innerHTML = experiment.name;
  retVal.appendChild(title);

  return retVal;
}

window.onload = function (): void {
  document.body.appendChild(renderExperiment(getExperiment(501) as Experiment));
};
