import React from "react";
//import imageProfile from '../images/image-profile.jpg';
import api from "../utils/Api.js";
import Card from "./Card.jsx";


function Main(props) {
  const [userName, setuserName] = React.useState("");
  const [userDescription, setuserDescription] = React.useState("");
  const [userAvatar, setuserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getCurrentUser()
      .then(({ name, about, avatar }) => {
        setuserName(name);
        setuserDescription(about);
        setuserAvatar(avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getUserCards()
      .then((data) => {
        console.log(data);
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="page__content">
      <section className="profile">
        <img
          src={userAvatar}
          className="profile__image"
          alt="Фото Жак-Ив Кусто"
          style={{ backgroundImage: `url(${userAvatar})` }}
          //src="<%=require('./images/image-profile.jpg')%>"
        />
        <div className="profile__image-edit" onClick={props.onEditAvatar}></div>

        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="profile__button-edit"
            type="button"
            aria-label="Кнопка Редактировать"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Кнопка Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="cards">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
