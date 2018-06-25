class DecoratorHelper {
  get injector() {
    return this.injectorInstance;
  }
  set injector(injector) {
    this.injectorInstance = injector;
  }
}

const helper = new DecoratorHelper();

export default helper;
