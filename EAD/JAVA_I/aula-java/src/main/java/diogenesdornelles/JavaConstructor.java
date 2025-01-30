public class JavaConstructor {
  int modelYear;
  String modelName;

  public JavaConstructor(int year, String name) {
    modelYear = year;
    modelName = name;
}

  public static void main(String[] args) {
    JavaConstructor myCar = new JavaConstructor(1969, "Corvette");
    System.out.println(myCar.modelYear + " " + myCar.modelName);
  }
}
