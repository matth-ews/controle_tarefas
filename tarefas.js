import { perguntarTexto, perguntarNumero } from './entrada.js';

export const tarefas = [];

export function escolhaPrioridade() {
    let prioridade;

    while (true) {
        console.log("Escolha de prioridade");
        console.log("1 - Baixa");
        console.log("2 - Média");
        console.log("3 - Alta");

        let escolha = perguntarNumero("Escolha uma opcao: ");

        if (escolha === 1) {
            prioridade = "Baixa";
            break;
        } else if (escolha === 2) {
            prioridade = "Média";
            break;
        } else if (escolha === 3) {
            prioridade = "Alta";
            break;
        } else {
            console.log("opcao invalida");
        }
    }

    return prioridade;
}



export function cadastrarTarefas() {
    const nome = perguntarTexto("titulo da tarefa: ")
    const descricao = perguntarTexto("descricao da tarefa: ")
    const responsavel = perguntarTexto("responsavel pela tarefa: ")
    const prioridade = escolhaPrioridade()

    if (!nome.trim()) {
        console.log("titulo não pode estar vazio");
        return

    }

    if (!descricao.trim()) {
        console.log("a descricao não pode ficar vazia");
        return
    }

    if (!responsavel.trim()) {
        console.log("responsavel não pode estar vazio");
        return
    }

    const tarefa = {
        id: tarefas.length + 1,
        titulo: nome,
        descricao: descricao,
        responsavel: responsavel,
        prioridade: prioridade,
        status: "Pendente"
    }

    tarefas.push(tarefa)



}


export function listarTarefas() {

    if (tarefas.length === 0) {
        console.log("não existem tarefas cadastradas");
        return;
    }

    tarefas.forEach((tarefa) => {
        console.log("id:", tarefa.id);
        console.log("titulo:", tarefa.titulo);
        console.log("descricao:", tarefa.descricao);
        console.log("responsavel:", tarefa.responsavel);
        console.log("prioridade:", tarefa.prioridade);
        console.log("status:", tarefa.status);
    })
}

export function buscarTarefa(id) {

    const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === id);

    if (!tarefaEncontrada) {
        return null;
    }

    console.log(`\nid: ${tarefaEncontrada.id}`);
    console.log(`título: ${tarefaEncontrada.titulo}`);
    console.log(`descrição: ${tarefaEncontrada.descricao}`);
    console.log(`responsável: ${tarefaEncontrada.responsavel}`);
    console.log(`prioridade: ${tarefaEncontrada.prioridade}`);
    console.log(`status: ${tarefaEncontrada.status}\n`);

    return tarefaEncontrada;
}

export function atualizarStatus(id) {

    const tarefa = buscarTarefa(id);

    if (!tarefa) {
        console.log("tarefa não encontrada");
        return;
    }

    console.log("1 - Pendente");
    console.log("2 - Em andamento");
    console.log("3 - Concluída");

    const opcao = perguntarNumero("digite o numero correspondente ao novo status: ");
    let novoStatus;

    if (opcao === 1) {
        novoStatus = "Pendente";
    } else if (opcao === 2) {
        novoStatus = "Em andamento";
    } else if (opcao === 3) {
        novoStatus = "Concluída";
    } else {
        console.log("status inválido");
        return;
    }

    tarefa.status = novoStatus;
    console.log("status da tarefa atualizado");
}

export function listarTarefasPorStatus(status) {

    const tarefasEncontradas = tarefas.filter(
        tarefa => tarefa.status.trim().toLowerCase() === status.trim().toLowerCase()
    );

    if (tarefasEncontradas.length === 0) {
        console.log("não existem tarefas com esse status");
        return;
    }

    tarefasEncontradas.forEach((tarefa) => {
        console.log("id:", tarefa.id);
        console.log("titulo:", tarefa.titulo);
        console.log("descricao:", tarefa.descricao);
        console.log("responsavel:", tarefa.responsavel);
        console.log("prioridade:", tarefa.prioridade);
        console.log("status:", tarefa.status);
    });
}












