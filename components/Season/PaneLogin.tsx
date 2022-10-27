import React from 'react';
import Links from 'constants/Links';

const PaneLogin = () => {
    return (
        <div className="pane-login">
            <div className="pane-cover" />
            <div className="pane">
                <a className="icon close">
                    <img src="/images/pane-close.svg" />
                </a>
                <div className="pane-content">
                    ¡Regístrate!
                    Así podrás disfrutar de toda la experiencia,
                    obtener <strong>Recompensas</strong> y acceder a contenido exclusivo.
                    <div className="col-2">
                        <a className="button-login cyan-dark button-register close" href={Links.registerCharacters}>
                            Registrarme
                        </a>
                        <a className="button-login cyan-dark button-quit close" href={Links.characters}>
                            En otro momento
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaneLogin;