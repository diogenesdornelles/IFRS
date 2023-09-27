"""
Module to implement main classes
"""
from enum import Enum


class DimensionError(Exception):
    """
    DimensionError class
    """

    def __init__(self, msg):
        super().__init__(msg)


class ConvergenceError(Exception):
    """
    ConvergenceError class
    """

    def __init__(self, msg):
        super().__init__(msg)


class MatrixTypeError(Exception):
    """
    MatrixTypeError class
    """

    def __init__(self, msg):
        super().__init__(msg)


class Method(Enum):
    """
    Create an Enum to access methods
    """
    GAUSS_JACOBI = 1
    GAUSS_SEIDEL = 2


class SquareMatrix:
    """
    A class for solving a system of linear equations using the Gauss-Jacobi or
    Gauss-Seidel method.
    :param matrix: The coefficient matrix of the system of equations.
    :param vector_solution: The vector of solutions for the equations.
    process.
    """

    def __init__(self,
                 matrix: list[list[float | int]],
                 vector_solution: list[float | int]):
        """
        Initializes a Matrix object with the coefficient matrix and solution
        vector.
        """
        self.matrix: list[list[float | int]] = matrix
        self.vector_solution: list[float | int] = vector_solution
        self.__old_approaches: list = []
        self.__new_approaches: list = []
        self.__validate_matrix()
        self.__validate_vector_solution()

    def __validate_matrix(self) -> None:
        """
        Validates the coefficient matrix for squareness and numeric data types.
        :return: None
        """
        dimension = len(self.matrix)
        for coefficients in self.matrix:
            if len(coefficients) != dimension:
                raise DimensionError(f'Enter full square matrix: order'
                                     f'{dimension}')
            for element in coefficients:
                if not isinstance(element, (float, int)):
                    raise MatrixTypeError(f'Please... enter only float'
                                          f' or integer numbers: {element}'
                                          f' is not compatible')

    def __validate_vector_solution(self) -> None:
        """
        Validates the solution vector's dimension.
        :return: None
        """
        if len(self.vector_solution) != len(self.matrix):
            raise DimensionError('Enter solution in size equivalent to matrix'
                                 'order')

    def __validate_variables(self,
                             variables: list[float | int]) -> None:
        """
        Validates the dimension of the initial approximation vector.
        :param variables: variables values for the first approach
        :return: None
        """
        if len(variables) != len(self.matrix):
            raise DimensionError('Enter first iteration in size equivalent to'
                                 'matrix order')

    def __check_convergence(self) -> None:
        """
        Checks if the coefficient matrix is convergent for the Gauss-Jacobi or
        Gauss-Seidel method.
        :return: None
        """
        for index, coefficients in enumerate(self.matrix):
            diagonal_element = coefficients[index]
            row_sum = sum(abs(coeff) for coeff in coefficients)
            - abs(diagonal_element)
            if diagonal_element == 0 or abs(diagonal_element) <= row_sum:
                raise ConvergenceError(
                    'The supplied matrix does not satisfy the '
                    'strict diagonal dominance condition and may not converge'
                    '.')

    def __get_one_approach(self,
                           variables: list[float | int],
                           method: Method = Method.GAUSS_JACOBI) \
            -> None:
        """
        Performs one iteration of the Gauss-Jacobi method and updates variable
        values.
        :param method: The method for iteration
        :param variables: variables values to perform an approach
        :return: None
        """

        self.__new_approaches = []
        _variables = variables[:]
        # scrolling through each row of the matrix
        for index, coefficients in enumerate(self.matrix):
            # initializing sum with solution value
            summation = self.vector_solution[index]
            # multiplying variables by coefficients and inverting operation
            # sign
            for i, [variable, coefficient] in enumerate(zip(_variables,
                                                            coefficients)):
                if i != index:
                    summation += variable * coefficient * (-1)
            # dividing the value of the summation by the coefficient
            result = summation / coefficients[index]
            # change variable value if gauss seidel method
            if method == Method.GAUSS_SEIDEL:
                _variables[index] = result
            # filling array with new approaches
            self.__new_approaches.append(result)

    def get_solution(self,
                     min_approach: int | float,
                     variables: list[float | int],
                     method: Method = Method.GAUSS_JACOBI) \
            -> list[float | int]:
        """
        Solves the system of equations iteratively using the Gauss-Jacobi
        method.
        :param method: The approximation mathematical method
        :param min_approach: minimum approach to end the interation
        :param variables: variables values for the first approach
        :return: list[float | int]
        """
        # Verify if matrix is convergent
        self.__check_convergence()
        # Validate variables given
        self.__validate_variables(variables)
        # start approach
        self.__old_approaches = variables[:]
        # perform first approach
        self.__get_one_approach(self.__old_approaches, method)
        # get first absolute differences between new and old approaches
        absolut_differences: list[int | float] = [abs(new - old) for old, new
                                                  in
                                                  zip(self.__old_approaches,
                                                      self.__new_approaches)]
        # perforating a loop in all differences of approximations
        # until all of them are less than the minimum approximation
        for index, value in enumerate(absolut_differences):
            while value > min_approach:
                self.__old_approaches = self.__new_approaches[:]
                self.__get_one_approach(self.__new_approaches, method)
                value = abs(self.__new_approaches[index] -
                            self.__old_approaches[index])
        # returning the last approximation as a solution
        return self.__new_approaches
