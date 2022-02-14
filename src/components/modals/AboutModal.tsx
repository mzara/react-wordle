import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Brought to you by-{' '}
        <a
          href="https://www.instagram.com/paradis.co.merch/"
          className="underline"
        >
          Paradis Co Merch
        </a>{' '}
		will have AOT merch coming soon!
		-{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline"
        >
          orginal code by cwackerfuss
        </a>{' '}
      </p>
    </BaseModal>
  )
}
