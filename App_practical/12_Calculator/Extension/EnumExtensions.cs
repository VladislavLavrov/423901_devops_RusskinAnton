using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace Calculator.Extension
{
    public static class EnumExtensions
    {
        /// <summary>
        /// Возвращает значение свойства <see cref="DisplayAttribute.Name" />
        /// для элемента перечисления, если атрибут <see cref="DisplayAttribute" /> задан;
        /// иначе возвращает имя элемента перечисления.
        /// </summary>
        /// <param name="val">Элемент перечисления.</param>
        public static string GetDisplayName(this Enum val)
        {
            return val
                .GetType()
                .GetMember(val.ToString())
                .FirstOrDefault()?
                .GetCustomAttribute<DisplayAttribute>(false)?
                .Name
                ?? val.ToString();
        }
    }
}
