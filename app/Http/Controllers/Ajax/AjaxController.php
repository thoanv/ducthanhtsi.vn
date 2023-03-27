<?php

namespace App\Http\Controllers\Ajax;

use App\Models\BannerDetail;
use App\Models\Category;
use App\Models\Destination;
use App\Models\Employee;
use App\Models\Origin;
use App\Models\Permission;
use App\Models\Post;
use App\Models\Product;
use App\Models\Slide;
use App\Models\Trademark;
use App\Models\TypePermission;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Ajax\BaseController as BaseController;

class AjaxController extends BaseController
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function enableColumn(Request $request)
    {
        Validator::make($request->all(), [
            'id' => 'required',
            'table' => 'required',
            'column' => 'required',
        ])->validate();
        $id = $request->get('id');
        $column = $request->get('column');

        $model = null;
        switch ($request->get('table')) {
            case 'categories':
                $model = Category::find($id);
                break;
            case 'destinations':
                $model = Destination::find($id);
                break;
            case 'type_permissions':
                $model = TypePermission::find($id);
                break;
            case 'permissions':
                $model = Permission::find($id);
                break;
            case 'employees':
                $model = Employee::find($id);
                break;
            case 'slides':
                $model = Slide::find($id);
                break;
            case 'banner_details':
                $model = BannerDetail::find($id);
                break;
            case 'origins':
                $model = Origin::find($id);
                break;
            case 'trademarks':
                $model = Trademark::find($id);
                break;
            case 'products':
                $model = Product::find($id);
                break;
            default:
                break;
        }
        if ($model) {
            $result = $model->update([
                $column => $model[$column] ? 0 : 1
            ]);

            return $this->sendResponse($result, 'successfully.');
        }

        return $this->sendResponse(false, 'successfully.');
    }
    public function enableColumnText(Request $request){
        Validator::make($request->all(), [
            'id' => 'required',
            'table' => 'required',
            'column' => 'required',
        ])->validate();
        $id = $request->get('id');
        $column = $request->get('column');
        $model = null;
        switch ($request->get('table')) {
            case 'posts':
                $model = Post::find($id);
                break;
            default:
                break;
        }

        if ($model) {
            $result = $model->update([
                $column => $model[$column] == 'YES' ? 'NO' : 'YES'
            ]);

            return $this->sendResponse($result, 'successfully.');
        }
    }

}
