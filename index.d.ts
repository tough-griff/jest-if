/// <reference types="jest" />

declare module jest {
  interface Describe {
    /**
     * Skips running this block in the current file if the condition returns false.
     *
     * @param condition The condition checking whether the block should run or skip.
     * @example
     *
     * describe.if(os.platform() === 'darwin')(
     *   'something mac specific',
     *   () => {
     *     it('returns the proper type', () => {
     *       expect(os.type()).toEqual('Darwin');
     *     });
     *   }
     * );
     */

    if: (condition: boolean) => jest.Describe;
  }

  interface It {
    /**
     * Skips running this test in the current file if the condition returns false.
     *
     * @param condition The condition checking whether the block should run or skip.
     * @example
     *
     * test.if(os.platform() === 'darwin')(
     *   'something mac specific',
     *   () => {
     *     expect(os.type()).toEqual('Darwin');
     *   }
     * );
     */
    if: (condition: boolean) => jest.It;
  }
}
