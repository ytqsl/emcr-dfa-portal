import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { DFAApplicationStart } from 'src/app/core/model/dfa-application-start.model';
import { DFAApplicationStartDataService } from './dfa-application-start-data.service';
import { FormCreationService } from '../../core/services/formCreation.service';

@Injectable({ providedIn: 'root' })
export class DFAApplicationStartMappingService {
  constructor(
    private formCreationService: FormCreationService,
    private dfaApplicationStartDataService: DFAApplicationStartDataService,
  ) {}

   private setAppTypeInsuranceDetails(dfaApplicationStart: DFAApplicationStart): void {
    let formGroup: UntypedFormGroup;

    this.formCreationService
      .getAppTypeInsuranceForm()
      .pipe(first())
      .subscribe((appTypeInsurance) => {
        appTypeInsurance.setValue({
          ...dfaApplicationStart
        });
        formGroup = appTypeInsurance;
      });
    this.dfaApplicationStartDataService.applicantOption = dfaApplicationStart.appTypeInsurance.applicantOption;
    this.dfaApplicationStartDataService.insuranceOption = dfaApplicationStart.appTypeInsurance.insuranceOption;
    this.dfaApplicationStartDataService.smallBusinessOption = dfaApplicationStart.appTypeInsurance.smallBusinessOption;
    this.dfaApplicationStartDataService.farmOption = dfaApplicationStart.appTypeInsurance.farmOption;
  }
}
