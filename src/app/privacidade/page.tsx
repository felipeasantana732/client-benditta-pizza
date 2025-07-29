"use client";
import Footer from '@/components/homePage/Footer';
import React from 'react';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
  padding: 80px 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  color: #000;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 40px;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 1rem;
`;

const ParagraphDiv = styled.div`
  margin-bottom: 20px;
  font-size: 1rem;
`;

const StyledLink = styled.a`
  color: var(--color-primary);
  text-decoration: underline;
  &:hover {
    color: var(--color-accent-yellow-benditta);
  }
`;

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      
      <PrivacyContainer>
        <Title>Política de Privacidade</Title>
        <Paragraph><strong>Última atualização:</strong> 27 de julho de 2025</Paragraph>
        <Paragraph>
          A sua privacidade é fundamental para a Benditta Pizza. Esta Política de Privacidade descreve como coletamos, usamos, processamos e divulgamos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD) do Brasil.
        </Paragraph>

        <SectionTitle>1. Quais dados coletamos?</SectionTitle>
        <Paragraph>
          Atualmente, nosso site funciona como uma landing page. Os dados que coletamos se dividem em duas categorias:
        </Paragraph>
        <ParagraphDiv>
          <strong>a) Dados coletados automaticamente:</strong> Ao navegar em nosso site, podemos coletar informações que os navegadores e servidores normalmente disponibilizam, como tipo de navegador, preferência de idioma, site de referência e a data e hora de cada solicitação de visitante. Também coletamos dados através de cookies e tecnologias de rastreamento para fins de publicidade e análise, como:
        </ParagraphDiv>
        <ul>
          <li>Endereço IP</li>
          <li>Dados de geolocalização (para serviços como o Google Maps)</li>
          <li>Informações sobre o dispositivo (hardware, sistema operacional)</li>
          <li>Páginas visitadas e interações no site</li>
        </ul>
        <Paragraph>
          <strong>b) Dados fornecidos por você:</strong> No futuro, poderemos coletar dados que você nos fornece diretamente, por exemplo, ao preencher um formulário de contato ou ao fazer um pedido em nosso cardápio digital.
        </Paragraph>

        <SectionTitle>2. Como e por que usamos seus dados?</SectionTitle>
        <ParagraphDiv>
          Utilizamos seus dados para as seguintes finalidades:
        </ParagraphDiv>
        <ul>
          <li><strong>Operar e melhorar nosso site:</strong> Entender como os visitantes usam nosso site para aprimorar a experiência.</li>
          <li><strong>Marketing e Publicidade:</strong> Utilizamos serviços de publicidade para exibir anúncios relevantes para você em outros sites (remarketing). Isso é feito através de parceiros como:
            <ul>
              <li><strong>Google Ads:</strong> Usamos para criar campanhas de publicidade e alcançar pessoas que possam se interessar por nossos produtos. Você pode gerenciar suas preferências de anúncios nas <StyledLink href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Configurações de anúncios do Google</StyledLink>.</li>
              <li><strong>Facebook Ads (planejado):</strong> Pretendemos usar para veicular anúncios na plataforma da Meta. Você poderá controlar os anúncios que vê nas configurações do seu perfil do Facebook.</li>
            </ul>
          </li>
          <li><strong>Serviços de Geolocalização:</strong>
            <ul>
              <li><strong>Google Maps:</strong> Integramos o Google Maps para fornecer informações de localização da nossa pizzaria. O uso deste recurso está sujeito às <StyledLink href="https://www.google.com/intl/pt-BR_br/help/terms_maps/" target="_blank" rel="noopener noreferrer">Políticas de Privacidade do Google</StyledLink>.</li>
            </ul>
          </li>
        </ul>

        <SectionTitle>3. Cookies e Tecnologias de Rastreamento</SectionTitle>
        <Paragraph>
          Cookies são pequenos arquivos de dados armazenados em seu navegador. Usamos cookies para coletar informações que nos ajudam a personalizar sua experiência e para fins de publicidade. Você pode gerenciar ou desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do nosso site.
        </Paragraph>

        <SectionTitle>4. Seus Direitos como Titular dos Dados (LGPD)</SectionTitle>
        <ParagraphDiv>
          De acordo com a LGPD, você tem o direito de:
        </ParagraphDiv>
        <ul>
          <li>Confirmar a existência de tratamento de seus dados.</li>
          <li>Acessar seus dados.</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
          <li>Revogar o consentimento a qualquer momento.</li>
        </ul>
        <Paragraph>
          Para exercer seus direitos, entre em contato conosco pelo e-mail abaixo.
        </Paragraph>

        <SectionTitle>5. Segurança dos Dados</SectionTitle>
        <Paragraph>
          Adotamos medidas de segurança para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
        </Paragraph>

        <SectionTitle>6. Alterações nesta Política</SectionTitle>
        <Paragraph>
          Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página com frequência para se manter informado sobre como estamos protegendo seus dados.
        </Paragraph>

        <SectionTitle>7. Contato</SectionTitle>
        <Paragraph>
          Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco:
        </Paragraph>
        <Paragraph>
          <strong>E-mail:</strong> <StyledLink href="mailto:contato@bendittapizza.com.br">contato@bendittapizza.com.br</StyledLink>
        </Paragraph>

      </PrivacyContainer>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;