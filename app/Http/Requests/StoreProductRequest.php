<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required|string|max:191|unique:products',
            'brand_id'=>'required',
            'order'=>'required',
            'model_no'=>'required|string|max:191',
            'price'=>'nullable|string|max:191',
            'description'=>'required|nullable|string',
            'technical_features'=>'nullable|string',
            'general_features'=>'required|nullable|string',
            'safety_and_veri'=>'nullable|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:400',
            'image2' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:400',
            'image3' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:400',
            'image4' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:400',
        ];
    }
}
