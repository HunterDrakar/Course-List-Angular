import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { appPipeModule } from "../shared/component/pipe/app-pipe.module";
import { starModule } from "../shared/component/star/star.module";
import { courseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        courseInfoComponent

    ], 
    imports: [
        CommonModule,
        FormsModule,
        starModule,
        appPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/.id', component: courseInfoComponent
            }
        ])
    ]
})
export class CourseModule{

}