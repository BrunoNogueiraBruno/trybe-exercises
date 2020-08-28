let piece = "Rei";
let pieceLowerCase = piece.toLowerCase();

switch(pieceLowerCase){
  case 'peão':
    console.log("O peão só pode andar uma casa a sua frente, horizontalmente");
    break;
  case 'rei':
    console.log("O rei pode andar uma casa, em qualquer direção");
    break;
  case 'cavalo':
    console.log("O cavalo pode andar quatro casas dispostas num formato de L, caso haja outras outras peças no caminho ele pula por cima delas");
    break;
  case 'torre':
    console.log("A torre não tem limitação de casas, mas só pode se mover vertical e horizontalmente");
    break;
  case 'bispo':
    console.log("O bispo não tem limitação de casas, mas só pode se mover diagonalmente");
    break;
  case 'rainha':
    console.log("A rainha não tem limitação de casas e pode se mover para todas as direções");
    break;
  default:
    console.log("Erro, peça inválida!");
    break;
};