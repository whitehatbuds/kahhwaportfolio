import React from 'react';
import { FooterDiv, FooterSection, GridNested, GridNested2 } from '../../shared/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
      <FooterDiv>
          <FooterSection>
            <GridNested>
                <div>TAN KAH HWA</div>
                <div><small>Kah Hwa &#169; Made this recently</small></div>
                <GridNested2>
                    <div>
                        <a href="https://www.linkedin.com/in/tankahhwa" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>
                    </div>
                    <div>
                        <a href="mailto:kahhwa96@gmail.com">
                            <FontAwesomeIcon icon={faEnvelopeSquare}/> Email
                        </a>
                    </div>
                </GridNested2>
            </GridNested>
          </FooterSection>
      </FooterDiv>
    );
};

export default Footer;