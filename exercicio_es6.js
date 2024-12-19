const alunos = [
    {nome: "joão", note: 7.3, bolsista: false},
    {nome: "Maria", note: 9.2, bolsista: true},
    {nome: "Pedro", note: 6.5, bolsista: false},
    {nome: "Ana", note: 7.1, bolsista: true},
    {nome: "Guilherme", note: 6.1, bolsista: false},
    {nome: "Alvin", note: 5.9, bolsista: false},
    {nome: "Eduardo", note: 9.0, bolsista: true},
    {nome: "Nathan", note: 5.5, bolsista: false},
];
const alunosAprovados = () => alunos.filter(aluno => aluno.nota >= 6);

const alunosReprovados = () => alunos.filter(aluno => aluno.nota < 6);

const alunosBolsistas = () => alunos.filter(aluno => aluno.bolsista);

const alunosNaoBolsistas = () => alunos.filter(aluno => !aluno.bolsista);

const exibiResultado = () => {
    const aprovados = alunosAprovados();
    const reprovados = alunosReprovados();
    const bolsista = alunosBolsistas();
    const NaoBolsistas = alunosNaoBolsistas();

    console.log("Aprovados:");
    aprovados.forEach(aluno => {
        console.log("${aluno.nome}: Aprovado com nota ${aluno.nota}");
    });

    console.log("\nReprovado:");
    reprovados.forEach(aluno => {
        console.log("${aluno.nome}: É bolsista");
    });

    console.log("\nBolsista:");
    bolsista.forEach(aluno => {
        console.log("${aluno.nome:} Não é bolsista");
    });

    console.log("\nNão Bolsista:");
    NaoBolsistas.forEach(aluno => {
        console.log("${aluno.nome}: Não é bolsista");
    });
}

exibiResultado();

