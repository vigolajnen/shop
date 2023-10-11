import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';

import { ROUTES } from '../utils/routes';

import LayoutPage from '../layout-page/LayoutPage';
import Home from '../pages/home/Home';
import SpbHome from '../pages/spb/SpbHome';

import { useModal } from '../hooks/useModal';
import Modal from '../components/modal/Modal';
import ModalContent from '../components/modal/ModalContent';

import FormOrderTariff from '../components/form-order-tariff/FormOrderTariff';

const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { closeModal, isModalOpen } = useModal();

  const onCloseModal = () => {
    closeModal();
    navigate(-1);
  };

  const background =
    location.state?.bgTariffSamara || location.state?.bgTariffSpb || location;

  return (
    <>
      <Routes location={background}>
        <Route path={ROUTES.HOME} element={<LayoutPage />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.SPB} element={<SpbHome />} />
        </Route>
      </Routes>

      {location.state?.bgTariffSamara && (
        <Routes>
          <Route
            path={`${ROUTES.HOME}/:id`}
            element={
              <Modal onClose={onCloseModal} title=''>
                <ModalContent>
                  {!isModalOpen ? <FormOrderTariff /> : null}
                </ModalContent>
              </Modal>
            }
          />
        </Routes>
      )}

      {location.state?.bgTariffSpb && (
        <Routes>
          <Route
            path={`${ROUTES.SPB}/:id`}
            element={
              <Modal onClose={onCloseModal} title=''>
                <ModalContent>
                  {!isModalOpen ? <FormOrderTariff /> : null}
                </ModalContent>
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
