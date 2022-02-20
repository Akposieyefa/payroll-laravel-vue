<?php

namespace App\Helpers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

/**
 * base system helper class
 */
class SystemHelper
{
    /**
     * @param $string
     * @return mixed
     */
    public function cleanStringHelper($string): mixed
    {
        if (is_null($string)) {
            return "";
        }else {
            return $string;
        }
    }

    /**
     * create staff helper
     * @return JsonResponse
     */
    public function createStaffHelper(): JsonResponse
    {
         return response()->json([
             "data" => [
                 'departments' =>  DB::table('departments')->get(),
                 'steps' =>  DB::table('steps')->get(),
                 'levels' =>  DB::table('levels')->get(),
                 'banks' => DB::table('banks')->get(),
                 'states' => DB::table('states')->get(),
                 'unions' => DB::table('unions')->get()
             ]
         ], 200);
     }

    /**
     * dashboard count helper
     * @return JsonResponse
     */
    public function dashBoardCountHelper(): JsonResponse
     {
         return response()->json([
             "data" => [
                 'departments' =>  DB::table('departments')->count(),
                 'levels' =>  DB::table('levels')->count(),
                 'staffs' => DB::table('staffs')->count(),
                 'unions' => DB::table('unions')->count()
             ]
         ], 200);
     }


    /**
     * get all lga
     * @param $id
     * @return JsonResponse
     */
    public function getLgaHelper($id): JsonResponse
     {
         return response()->json([
             "data" => [
                 'lgas' =>  DB::table('lgas')->where('state_id', '=', $id)->get(),
             ]
         ], 200);
     }

}
