import { expect } from 'chai';
import { convertOrder } from '../../../src/components/table-content-wrapper/table-body/table-body-row/table-body-row';

describe('convertOrder', () => {
  it('convertOrder does the right things', () => {
    const spacers = [4, 8, 12, 16];
    expect(convertOrder(3, spacers)).to.equal(3);
    expect(convertOrder(4, spacers)).to.equal(5);
    expect(convertOrder(6, spacers)).to.equal(7);
    expect(convertOrder(7, spacers)).to.equal(9);
    expect(convertOrder(8, spacers)).to.equal(10);
    expect(convertOrder(10, spacers)).to.equal(13);
    expect(convertOrder(12, spacers)).to.equal(15);
  });
});
