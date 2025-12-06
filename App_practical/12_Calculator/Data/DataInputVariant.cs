using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using _12_Calculator.Models;

namespace _12_Calculator.Data
{
    public class DataInputVariant
    {
        /// <summary>
        /// Уникальный идентификатор записи.
        /// </summary>
        [Key]
        public int ID_DataInputVariant { get; set; }

        /// <summary>
        /// Первый операнд.
        /// </summary>
        public double Operand_1 { get; set; }

        /// <summary>
        /// Второй операнд.
        /// </summary>
        public double Operand_2 { get; set; }

        /// <summary>
        /// Тип операции.
        /// </summary>
        public Operation Type_operation { get; set; }

        /// <summary>
        /// Результат выполнения операции.
        /// </summary>
        [Column(TypeName = "varchar(128)")]
        public string? Result { get; set; }
    }
}
