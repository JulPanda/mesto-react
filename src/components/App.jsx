import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);  
  
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {    
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});    
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        textButton="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            id="input-name"
            type="text"
            placeholder="Имя"
            name="inputName"
            className="popup__input popup__input_type_name"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="input-name-error" className="popup__error"></span>

          <input
            id="input-about"
            type="text"
            placeholder="О себе"
            name="inputAbout"
            className="popup__input popup__input_type_about"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="input-about-error" className="popup__error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        name="card"
        title="Новое место"
        textButton="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            id="input-place"
            type="text"
            placeholder="Название"
            name="inputPlace"
            className="popup__input popup__input_type_place"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="input-place-error" className="popup__error"></span>

          <input
            id="input-link"
            type="url"
            placeholder="Ссылка на картинку"
            name="inputLink"
            className="popup__input popup__input_type_link"
            required
          />
          <span id="input-link-error" className="popup__error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        textButton="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            id="input-avatar"
            type="url"
            placeholder="Ссылка на аватар"
            name="inputAvatarLink"
            className="popup__input popup__input_type_avatar"
            required
          />
          <span id="input-avatar-error" className="popup__error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены?" textButton="Да" />

      <ImagePopup onClose={closeAllPopups} card={selectedCard}      
      />
    </div>
  );
}

export default App;
