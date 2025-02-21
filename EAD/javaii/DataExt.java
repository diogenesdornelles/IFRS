public class DataExt {
  public static void main(String[] args) {
    System.out.println("Informe o dia: ");
    int dia = Integer.parseInt(System.console().readLine());
    System.out.println("Informe o mês: ");
    int mes = Integer.parseInt(System.console().readLine());
    System.out.println("Informe o ano: ");
    int ano = Integer.parseInt(System.console().readLine());
    String extMes = "Janeiro";
    switch (mes) {
      case 1: {
        extMes = "Janeiro";
        break;
      }
      case 2: {
        extMes = "Fevereiro";
        break;
      }
      case 3: {
        extMes = "Março";
        break;
      }
      case 4: {
        extMes = "Abril";
        break;
      }
      case 5: {
        extMes = "Maio";
        break;
      }
      case 6: {
        extMes = "Junho";
        break;
      }
      case 7: {
        extMes = "Julho";
        break;
      }
      case 8: {
        extMes = "Agosto";
        break;
      }
      case 9: {
        extMes = "Setembro";
        break;
      }
      case 10: {
        extMes = "Outubro";
        break;
      }
      case 11: {
        extMes = "Novembro";
        break;
      }
      case 12: {
        extMes = "Dezembro";
        break;
      }
    }
    String diaExt = dia < 10 ? String.format("0%d", dia) : String.format("%d", dia);
    System.out.println(diaExt + " de " + extMes + " de " + ano);
  }
}