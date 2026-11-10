import { perguntarTexto, perguntarNumero } from "./entrada.js"
import { relatorioGeral, relatorioPrioridades } from "./relatorios.js"
import { relatorioGeral, relatorioPrioridades, relatorioResponsaveis } from "./relatorios.js"



while (true) {

    console.log("1 - Cadastrar tarefa");
    console.log("2 - Listar todas as tarefas");
    console.log("3 - Buscar tarefa por ID");
    console.log("4 - Atualizar status de tarefa");
    console.log("5 - Listar tarefas por status");
    console.log("6 - Relatório geral");
    console.log("7 - Relatório por prioridade");
    console.log("8 - Relatório de responsáveis");
    console.log("0 - Sair");

    const opcao = perguntarNumero("escolha uma opcao: ")

    if (opcao === 0) {
        console.log("encerrando");
        break

    }


    switch (opcao) {

        case 1:
            console.clear()
            cadastrarTarefas()
            break

        case 2:
            console.clear()
            listarTarefas()
            break

        case 3: {
            console.clear()
            let id = perguntarNumero("digite o id da tarefa que sera procurada: ")
            buscarTarefa(id)
            break
        }

        case 4: {
            console.clear()
            let id = perguntarNumero("digite o id da tarefa: ")
            atualizarStatus(id)
            break
        }

        case 5:
            console.clear()
            const statusFiltro = perguntarTexto("Digite o status que deseja filtrar: ");
            listarTarefasPorStatus(statusFiltro);
            break;

        case 6:
            console.clear()
            relatorioGeral()
            break

        case 7:
            console.clear()
            relatorioPrioridades()
            break

        case 8:
            console.clear()
            relatorioResponsaveis()
            break


        default:
            console.log("opcao invalida")



    }



}