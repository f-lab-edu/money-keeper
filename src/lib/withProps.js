const withProps = (base, args) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  class extends base {
    constructor() {
      super(args);
    }
  };

export default withProps;
