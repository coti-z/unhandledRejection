// a.service.ts
import { forwardRef, Inject, Injectable, Scope } from '@nestjs/common';
import { BService } from './b.service';

@Injectable({ scope: Scope.REQUEST })
export class AService {
  constructor(
    @Inject(forwardRef(() => BService))
    private serviceB: BService,
  ) {}

  checkB() {
    console.log('serviceB:', this.serviceB);
    return this.serviceB;
  }
}
