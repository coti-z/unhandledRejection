// b.service.ts
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class BService {
  constructor() {
    // provider error
    throw new Error('BService initialization failed');
  }
}
