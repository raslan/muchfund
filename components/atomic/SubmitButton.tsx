const SubmitButton = ({ text }: Props) => {
  return (
    <button
      type='submit'
      className='btn btn-ghost hover:text-base-content bg-primary-focus text-secondary-content mt-3'
    >
      {text}
    </button>
  );
};

type Props = {
  text: string;
};

export default SubmitButton;
