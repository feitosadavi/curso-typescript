type SingleCandidate = {
  nome: string;
  votos?: number;
};

type Candidates = {
  category: {
    nome: string;
    candidates: SingleCandidate[];
  };
};

export default class Model {
  private candidates: Candidates | null = null;
  constructor(protected category: string) {}

  vote(vote: string): void {
    const _candidate = this.candidates?.category.candidates.map(
      (candidate: SingleCandidate | null) => {
        if (candidate === null) return null;

        if (candidate.nome !== vote) return null;

        if (!candidate.votos) candidate.votos = 1;
        else candidate.votos += 1;

        if (candidate === null) return null;

        return candidate.nome;
      },
    );

    if (_candidate?.includes(vote)) {
      console.log('Voto computado!');
    } else {
      console.log('Candidato não encontrado');
    }
  }

  addCandidate(obj: SingleCandidate): void {
    if (!this.candidates) {
      this.candidates = {
        category: {
          nome: this.category,
          candidates: [obj],
        },
      };
    } else {
      this.candidates.category.candidates.push(obj);
    }
  }

  showCadidates(): void {
    console.log('Candidatos:');
    this.candidates?.category.candidates.forEach((candidate) => {
      console.log(`${candidate.nome} ${candidate.votos || 0}`);
    });
  }

  showResults(): void {
    console.log(`${this.category}. Resultados: `);
    this.candidates?.category.candidates.forEach((candidate) => {
      console.log(`${candidate.nome} ${candidate.votos}`);
    });
  }
}

const lang = new Model('Qual é a melhor linguagem de programação?');
lang.addCandidate({ nome: 'javascript' });
lang.addCandidate({ nome: 'typescript' });
lang.addCandidate({ nome: 'python' });

lang.showCadidates();

lang.vote('python');
lang.vote('javascript');
lang.vote('typescript');
lang.vote('typescript');
lang.vote('typescript');
lang.vote('typescript');
lang.vote('ruby');

lang.showResults();
