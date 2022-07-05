import React from "react";
import '../HeaderMenu/HeaderMenu.scss';

function HeaderMenu () {
	return (
		<div className="header">
			<div className="header__container">
				<div className="header__wrapper">
					<div className="header__logo-block">
					  <a href="#">Logo</a>
					</div>
					<div className="header__navigation-block">
					  <div className="header__navigation-item">Шорты</div>
					  <div className="header__navigation-item">Джинсы</div>
					  <div className="header__navigation-item">Майки</div>
					  <div className="header__navigation-item">Костюмы</div>
					  <div className="header__navigation-item">18+</div>
					</div>
					<div className="header__login-block">
						<button className="header__login-button">Логин</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderMenu