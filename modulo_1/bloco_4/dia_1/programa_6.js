// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

let peca = 'Torre';
let lpeca = peca.toLowerCase();

switch (lpeca) {
    case 'peão':
        console.log('vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backwards on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.');
        break;

    case 'torre':
        console.log('horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.');
        break;

    case 'cavalo':
        console.log('in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.');
        break;

    case 'bispo':
        console.log('diagonally any number of squares. They are unable to jump over pieces.');
        break;

    case 'rainha':
        console.log('diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.');
        break;

    case 'rei':
        console.log('one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, know as castling.');
        break;

    default:
        console.log('peca invalida');
}