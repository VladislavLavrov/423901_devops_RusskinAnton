import { useEffect, useState } from "react";

interface BotConfig {
  Name: string;
  Token: string;
  WebStore: {
    BaseUrl: string;
    SiteId: number;
    MerchantId: number;
    ProfileId: number;
    SecretKey: string;
  };
  HelpInfo: {
    Description: string;
    TelegramLink: string;
    Website: string;
    ContactPhone: string;
    OfferText: string;
    OfferUrl: string;
    VisitRulesText: string;
    VisitRulesUrl: string;
  };
}

const UsersComponent = () => {
  const [config, setConfig] = useState<BotConfig | null>(null);

  useEffect(() => {
    fetch("/config.json")
      .then((res) => res.json())
      .then((data) => setConfig(data.TelegramBots[0]))
      .catch((err) => console.error("Ошибка загрузки config.json:", err));
  }, []);

  if (!config) return <p>Загрузка...</p>;

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Информация о боте</h2>
      <p><strong>Название:</strong> {config.Name}</p>
      <p><strong>Описание:</strong> {config.HelpInfo.Description}</p>
      <p><strong>Телефон:</strong> {config.HelpInfo.ContactPhone}</p>
      
      <h3>Ссылки</h3>
      <ul>
        <li>
          <a href={config.HelpInfo.TelegramLink} target="_blank">
            Telegram
          </a>
        </li>
        <li>
          <a href={config.HelpInfo.Website} target="_blank">
            Сайт
          </a>
        </li>
        <li>
          <a href={config.HelpInfo.OfferUrl} target="_blank">
            {config.HelpInfo.OfferText}
          </a>
        </li>
        <li>
          <a href={config.HelpInfo.VisitRulesUrl} target="_blank">
            {config.HelpInfo.VisitRulesText}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UsersComponent;
