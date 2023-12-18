import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';

import { useModal } from '../hooks/useModal';
import { CityContext } from '../context/CityContext';
import { ROUTERS } from '../utils/routes';
import LayoutPage from '../layouts/LayoutPage';
import NotFoundPage from '../pages/NotFoundPage';
import Spinner from '../components/UI/spinner/Spinner';
import FormOrderTariffTabs from '../components/form-order-tariff/FormOrderTariffTabs';

const Modal = lazy(() => import('../components/UI/modal/Modal'));
const ModalContent = lazy(() => import('../components/UI/modal/ModalContent'));
const FormOrderTariff = lazy(
  () => import('../components/form-order-tariff/FormOrderTariff'),
);

const SamHome = lazy(() => import('../pages/SamHome'));
const SpbHome = lazy(() => import('../pages/SpbHome'));
const ArhHome = lazy(() => import('../pages/ArhHome'));
const YarHome = lazy(() => import('../pages/YarHome'));
const IjkHome = lazy(() => import('../pages/IjkHome'));
const KznHome = lazy(() => import('../pages/KznHome'));
const NchHome = lazy(() => import('../pages/NchHome'));
const UlyHome = lazy(() => import('../pages/UlyHome'));
const TulHome = lazy(() => import('../pages/TulHome'));
const TolHome = lazy(() => import('../pages/TolHome'));
const RyzHome = lazy(() => import('../pages/RyzHome'));
const PesHome = lazy(() => import('../pages/PesHome'));
const GojHome = lazy(() => import('../pages/GojHome'));

export default function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const { closeModal, isModalOpen } = useModal();

  const onCloseModal = () => {
    closeModal();
    navigate(-1);
  };

  const background =
    location.state?.sam_tariffBg ||
    location.state?.spb_tariffBg ||
    location.state?.arh_tariffBg ||
    location.state?.yar_tariffBg ||
    location.state?.ijk_tariffBg ||
    location.state?.kzn_tariffBg ||
    location.state?.nch_tariffBg ||
    location.state?.goj_tariffBg ||
    location.state?.pes_tariffBg ||
    location.state?.ryz_tariffBg ||
    location.state?.tol_tariffBg ||
    location.state?.tul_tariffBg ||
    location.state?.uly_tariffBg ||
    location;

  return (
    <>
      <Routes location={background}>
        <Route path={ROUTERS.sam.url} element={<LayoutPage />}>
          <Route index element={<SamHome />} />
          <Route path="/index.html" element={<SamHome />} />
          <Route path={ROUTERS.spb.url} element={<SpbHome />} />
          <Route path={ROUTERS.arh.url} element={<ArhHome />} />
          <Route path={ROUTERS.yar.url} element={<YarHome />} />
          <Route path={ROUTERS.ijk.url} element={<IjkHome />} />
          <Route path={ROUTERS.kzn.url} element={<KznHome />} />
          <Route path={ROUTERS.nch.url} element={<NchHome />} />
          <Route path={ROUTERS.goj.url} element={<GojHome />} />
          <Route path={ROUTERS.pes.url} element={<PesHome />} />
          <Route path={ROUTERS.ryz.url} element={<RyzHome />} />
          <Route path={ROUTERS.tol.url} element={<TolHome />} />
          <Route path={ROUTERS.tul.url} element={<TulHome />} />
          <Route path={ROUTERS.uly.url} element={<UlyHome />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {location.state?.spb_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.spb.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.spb.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariffTabs /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.sam_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.sam.url}:id`}
            element={
              <Suspense fallback={<Spinner />}>
                x
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.sam.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.arh_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.arh.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.arh.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.yar_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.yar.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.yar.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.ijk_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.ijk.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.ijk.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.kzn_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.kzn.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.kzn.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.nch_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.nch.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.nch.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.goj_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.goj.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.goj.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.pes_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.pes.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.pes.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.ryz_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.ryz.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.ryz.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.tol_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.tol.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.tol.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.tul_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.tul.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.tul.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
      {location.state?.uly_tariffBg && (
        <Routes>
          <Route
            path={`${ROUTERS.uly.url}/:id`}
            element={
              <Suspense fallback={<Spinner />}>
                <Modal onClose={onCloseModal} title="">
                  <CityContext.Provider value={ROUTERS.uly.name}>
                    <ModalContent>
                      {!isModalOpen ? <FormOrderTariff /> : null}
                    </ModalContent>
                  </CityContext.Provider>
                </Modal>
              </Suspense>
            }
          />
        </Routes>
      )}
    </>
  );
}
