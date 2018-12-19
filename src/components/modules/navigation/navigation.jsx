import React from 'react';
import './navigation.scss';

const navigation = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>1</span>About Me</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>2</span>And You?</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>3</span>Popular Videos</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>4</span>Stories</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>5</span>Come On...</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default navigation;