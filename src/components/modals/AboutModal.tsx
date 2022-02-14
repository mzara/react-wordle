import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Wanted to keep busy in between episodes 😄 and I love AOT -{' '}
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
