public class Placas {
  public static void main(String[] args) {
    System.out.println("Informe o placa: ");
    int placa = Integer.parseInt(System.console().readLine());
    int anoVistoria = 0;
    String mesVistoria = "";

    switch (placa % 10) {
      case 0: {
        mesVistoria = "Janeiro";
        anoVistoria = 2025;
        break;
      }
      case 1: {
        mesVistoria = "Fevereiro";
        anoVistoria = 2025;
        break;
      }
      case 2: {
        mesVistoria = "Março";
        anoVistoria = 2025;
        break;
      }
      case 3: {
        mesVistoria = "Abril";
        anoVistoria = 2025;
        break;
      }
      case 4: {
        mesVistoria = "Maio";
        anoVistoria = 2025;
        break;
      }
      case 5: {
        mesVistoria = "Junho";
        anoVistoria = 2025;
        break;
      }
      case 6: {
        mesVistoria = "Setembro";
        anoVistoria = 2024;
        break;
      }
      case 7: {
        mesVistoria = "Outubro";
        anoVistoria = 2024;
        break;
      }
      case 8: {
        mesVistoria = "Novembro";
        anoVistoria = 2024;
        break;
      }
      case 9: {
        mesVistoria = "Dezembro";
        anoVistoria = 2024;
        break;
      }
    }
    System.out.println("Vistoria em: " + mesVistoria + " de " + anoVistoria);
  }
}