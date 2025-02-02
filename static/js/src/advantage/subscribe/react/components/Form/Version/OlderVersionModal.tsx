import { Button, List, Modal } from "@canonical/react-components";
import React from "react";
import usePortal from "react-useportal";

const OlderVersionModal = () => {
  const { openPortal, closePortal, isOpen, Portal } = usePortal();

  return (
    <>
      <a onClick={openPortal} aria-controls="other-versions-modal">
        Are you using an older version?
      </a>
      {isOpen ? (
        <Portal>
          <Modal title="Other versions?" close={closePortal}>
            <span>
              Ubuntu Advantage is available only for Ubuntu 20.04 LTS, 18.04
              LTS, 16.04 LTS, and 14.04 ESM.
              <br />
              <br />
              You can:
            </span>
            <List
              items={[
                <a
                  href="/tutorials/tutorial-upgrading-ubuntu-desktop#1-before-you-start"
                  key="upgrade"
                >
                  Upgrade to a supported version
                </a>,
                <a href="/support/community-support" key="community">
                  Explore community support options
                </a>,
              ]}
            />
            <div className="u-align--right">
              <Button onClick={closePortal}>Go back</Button>
            </div>
          </Modal>
        </Portal>
      ) : null}
    </>
  );
};

export default OlderVersionModal;
