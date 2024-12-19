const alunos = [
    {nome: "joão", nota: 7.3, bolsista: falso},
    {nome: "Maria", nota: 9.2, bolsista: verdadeiro},
    {nome: "Pedro", nota: 6.5, bolsista: falso},
    {nome: "Ana", nota: 7.1, bolsista: verdadeiro},
    {nome: "Guilherme", nota: 6.1, bolsista: falso},
    {nome: "Alvin", nota: 5.9, bolsista: falso},
    {nome: "Eduardo", nota: 9.0, bolsista: verdadeiro},
    {nome: "Nathan", nota: 5.5, bolsista: falso},
];
const filtrarAlunos = (critério) => alunos.filter(critério);

const exibirResultado = () => {
    const aprovados = filtrarAlunos(aluno => aluno.grade >= 6);

    const reprovados = filtrarAlunos(aluno => aluno.nota < 6);

    const bolsista = filtrarAlunos(aluno => aluno.bolsista);
    const naoBolsista = filtrarAlunos(aluno => !aluno.bolsista);

    const imprimir = (título, lista) => {
        console.log(`\n${título}:`);
        lista.forEach(aluno => console.log(`${aluno.nome}: Nota${aluno.grade}`));
    };

    imprimir("Aprovados", aprovados);
    imprimir("Reprovados", reprovados);
    imprimir("Bolsista", bolsista);
    imprimir("Não Bolsista", naoBolsista);
};

exibirResultado();

