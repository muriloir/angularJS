angular.module("meuModulo")
    .controller("indexController", function ($scope) {
        $scope.titulo = "Home";
        $scope.alunos = [
            { nome: "Camila", email: "camila@email.com", nota1: 65, nota2: 80, nota3: 55 },
            { nome: "Diego", email: "diego@email.com", nota1: 65, nota2: 80, nota3: 55 },
            { nome: "Marcos", email: "marcos@email.com", nota1: 65, nota2: 80, nota3: 55 },
            { nome: "Silvio", email: "silvio@email.com", nota1: 65, nota2: 80, nota3: 55 },
            { nome: "Cleiton", email: "cleiton@email.com", nota1: 65, nota2: 80, nota3: 55 },
            { nome: "Ana", email: "ana@email.com", nota1: 65, nota2: 80, nota3: 55 },
            { nome: "Maradona", email: "maradona@email.com", nota1: 65, nota2: 80, nota3: 55 }
        ];

        let init = function () {
            $scope.alunos.forEach(function (aluno) {
                aluno.media = media(aluno);
            });
            limpaForm();
        };

        let media = function (Aluno) {
            let media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3)) / 3;
            return media.toFixed(2);
        }

        $scope.abreAddAluno = function () {
            $scope.editando = false;
            limpaForm();
            $('#modal1').openModal();
        };

        $scope.addAluno = function (Aluno) {
            Aluno.media = media(Aluno);
            $scope.alunos.push(Aluno);
            $('#modal1').closeModal();
            limpaForm();
        };

        $scope.editando = false;
        let alunoEditar;

        let limpaForm = function () {
            $scope.Aluno = { nome: '', email: '', nota1: '', nota2: '', nota3: '', media: '' }
        }

        $scope.editarAluno = function (Aluno) {
            $scope.editando = true;
            angular.copy(Aluno, $scope.Aluno);
            $('#modal1').openModal();
            alunoEditar = Aluno;
        }

        $scope.salvarAluno = function (Aluno) {
            alunoEditar.nome = Aluno.nome;
            alunoEditar.email = Aluno.email;
            alunoEditar.nota1 = Aluno.nota1;
            alunoEditar.nota2 = Aluno.nota2;
            alunoEditar.nota3 = Aluno.nota3;
            alunoEditar.media = Aluno.media(Aluno);
        };

        $scope.deletarAluno = function (Aluno) {
            for (let index in $scope.alunos) {
                let aluno = $scope.alunos[index];
                if (Aluno === aluno) {
                    $scope.alunos.splice(index, 1);
                }
            }
        };

        init();
    }
)
.controller("contatoController", function ($scope) {
    $scope.titulo = "Contato";
});