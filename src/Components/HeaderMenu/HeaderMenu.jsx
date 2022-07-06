import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import './HeaderMenu.scss';

function HeaderMenu () {
	return (
		<div className="header">
			<div className="header__container">
				<div className="header__wrapper">
					<div className="header__logo-block">
					  <Button href="#">Logo</Button>
					</div>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>Шорты</Button>
            <Button>Джинсы</Button>
            <Button>Майки</Button>
            <Button>Костюмы</Button>
            <Button>18+</Button>
          </ButtonGroup>
					<div className="header__login-block">
						<Button className="header__login-button" variant="contained">Логин</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderMenu