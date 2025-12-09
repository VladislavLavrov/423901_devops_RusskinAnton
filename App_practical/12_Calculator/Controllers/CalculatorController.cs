using _12_Calculator.Data;
using _12_Calculator.Models;
using Microsoft.AspNetCore.Mvc;

namespace _12_Calculator.Controllers
{
    public class CalculatorController : Controller
    {
        public CalculatorController()
        {
        }

        /// <summary>
        /// Отображение страницы Index.
        /// </summary>
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Обработка запроса на вычисление.
        /// </summary>
        /// <param name="num1">Первый операнд.</param>
        /// <param name="num2">Второй операнд.</param>
        /// <param name="operation">Тип операции (сложение, вычитание, умножение, деление).</param>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Index(double num1, double num2, Operation operation)
        {
            // Подготовка объекта для расчета
            var dataInputVariant = new DataInputVariant
            {
                Operand_1 = num1,
                Operand_2 = num2,
                Type_operation = operation
            };

            // Выполнение вычисления
            var result = CalculatorLibrary.CalculateOperation(num1, num2, operation);

            ViewBag.Result = result.ToString();

            // Здесь при необходимости можно сохранить dataInputVariant в БД

            return View();
        }
    }
}
