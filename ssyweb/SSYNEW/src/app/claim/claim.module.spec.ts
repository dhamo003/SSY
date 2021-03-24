import { ClaimModule } from './claim.module';

describe('ClaimModule', () => {
  let claimModule: ClaimModule;

  beforeEach(() => {
    claimModule = new ClaimModule();
  });

  it('should create an instance', () => {
    expect(claimModule).toBeTruthy();
  });
});
